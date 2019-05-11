module.exports = {
    apps : [{
      name: "yarn",
      script: "yarn",
      args: "theia start /sandbox --hostname 127.0.0.1 --port 3002",
      interpreter: "/bin/bash",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }