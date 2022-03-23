import { pack } from "@kickstartds/core/lib/storybook/helpers";

const TestSchema = {
    type: "object",
    properties: {
      title: {
        type: "string",
      },
      subTitle: {
        type: "string",
      },
      price: {
        type: "number",
      },
      counts: {
        type: "array",
        items: {
          type: "object",
          properties: {
            type: {
              type: "number",
              enum: [0, 1, 2, 3, 4, 5, 6, 7],
            },
            value: {
              type: "number",
            },
            image: {
              type: "string",
            },
          },
          required: ["type", "value", "image"],
          additionalProperties: false,
        },
      },
      image: {
        type: "string",
      },
      targetUri: {
        type: "string",
      },
      publishedAt: {
        type: "number",
      },
      categoryId: {
        type: "number",
      },
      quickReportQuestion: {
        type: "object",
        properties: {
          content: {
            type: "string",
          },
          reportItemId: {
            type: "number",
          },
        },
        required: ["content", "reportItemId"],
        additionalProperties: false,
      },
      userId: {
        type: "number",
      },
      meta: {
        type: "object",
        properties: {
          advertisement: {
            type: "object",
            properties: {
              id: {
                type: "number",
              },
            },
            required: ["id"],
            additionalProperties: false,
          },
        },
        additionalProperties: false,
      },
    },
    required: [
      "title",
      "subTitle",
      "price",
      "counts",
      "image",
      "targetUri",
      "publishedAt",
      "categoryId",
      "userId",
    ],
    additionalProperties: false,
  };
  
export default {
    title: "content/Test",
    component: Test,
    parameters: {
      jsonschema: TestSchema,
    },
};

const Template = (args) => { 
    return (
        <div>
            {JSON.stringify(args)}
        </div>
    )
}

export const Test = Template.bind({})

Test.args = pack({
    title: "맛있는 고기예요",
    subTitle: "역삼동",
    price: 39000,
    counts: [
      {
        type: 3,
        value: 10,
        image: "",
      },
      {
        type: 2,
        value: 0,
        image: "",
      },
      {
        type: 1,
        value: 6,
        image: "",
      },
    ],
    image:
      "https://d1rb42tpk2uaws.cloudfront.net/origin/article/202006/ED9D54F7744525B5B5463915CF10F143D3FC2F128CE78703CE9CB7820C0CEB0F.jpg?q=82&s=300x300&t=crop",
    targetUri: "~~~~~~",
    publishedAt: 156789222,
    categoryId: 44,
    quickReportQuestion: {
      content: "구인구직 게시글인가요?",
      reportItemId: 63,
    },
    userId: 33,
    meta: {
      advertisement: {
        id: 1,
      },
    },
  });