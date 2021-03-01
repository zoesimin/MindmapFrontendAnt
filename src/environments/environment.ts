// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//默认的开发环境是用environment.ts文件，我们也可以在该目录下创建其他的环境配置文件如environment.prod.ts文件，然后在angular.json文件中修改一些配置
//每个环境对应的配置，执行不同的命令，就会调用不同的文件
// 一般有开发环境、线上环境、测试环境、预发布环境等；不同环境使用不同的 API 接口地址，我们可以在不同的文件中设置不同的 API 接口地址;
export const environment = {
  production: false,
  // apiUrl: 'http://52.83.107.29:8899/'
  // apiUrl: 'http://localhost:8899/'
  apiUrl: 'http://121.4.87.40:8899/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
