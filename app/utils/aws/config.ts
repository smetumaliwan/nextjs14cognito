import { ResourcesConfig } from "aws-amplify";

const amplifyConfig: ResourcesConfig = {
    Auth: {
      Cognito: {
        userPoolClientId: process.env.UC_ID || '',
        userPoolId: process.env.UP_ID || '',
        }
      }
    }

export default amplifyConfig;
