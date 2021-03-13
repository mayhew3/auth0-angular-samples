export const environment = {
  production: false,
  auth: {
    domain: 'mayhew3.auth0.com',
    clientId: 'Q07Hxq11tkSKubyJ8yaXWMHfc4llMkag',
    audience: 'https://uncharted-insights.herokuapp.com',
    redirectUri: window.location.origin,
  },
  httpInterceptor: {
    allowedList: ['/api/*'],
  },
};

