const axios = require('axios');
const { Joi } = require("@docusaurus/utils-validation")

const validateOptionsSchema = Joi.object(
  {
    path: Joi.string().required(),
    projects: Joi.array().items(
      Joi.object(
        {
          name: Joi.string().required(),
          path: Joi.string().required(),
          json_urls: Joi.array().items(Joi.string()),
        }
      )
    ).required(),
    component: Joi.string().required(),
  }
);

const getProject = async (project) => {
  const { json_urls = [] } = project;

  const jsonList = await Promise.all(json_urls.map((url) => {
    return axios.get(url).then((res) => {
      return res.data || {};
    }).catch((e) => {
      console.log(e.response.data);

      return {};
    });
  }));

  const _project = {};
  jsonList.forEach((json) => Object.assign(_project, json));

  return Object.assign(_project, project);
};

const pluginRemoteJson = (context, options) => ({
  name: 'github-repositories',
  validateOptions: ({ options, validate }) => {
    const validationOptions = validate(validateOptionsSchema, options);

    return validationOptions;
  },

  async loadContent() {
    let { projects = [] } = options;

    projects = await Promise.all(projects.map((project) => getProject(project)));

    return projects
  },
  async contentLoaded({content, actions}) {
    const { createData, addRoute } = actions;
    const projects = await createData('projects.json', JSON.stringify(content));

    addRoute({
      exact: true,
      path: options.path,
      component: options.component,
      modules: { projects },
    });
  }
});

module.exports = pluginRemoteJson;
