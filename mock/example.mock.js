import { createDefineMock } from "vite-plugin-mock-dev-server";

const definePostMock = createDefineMock((mock) => {
  mock.url = path.join('/api/example', mock.url)
})

export default definePostMock([
  {
    url: "/funs",
    delay: 500,
    body: {
      code: 200,
      message: "OK",
      result: Mock.mock({
        "list|10": [
          {
            "id|+1": 1
          }
        ]
      })
    }
  }
]);
