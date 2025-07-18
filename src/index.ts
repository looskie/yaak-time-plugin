import { PluginDefinition } from "@yaakapp/api";

export const plugin: PluginDefinition = {
  templateFunctions: [
    {
      name: "time.now",
      description:
        "Returns the current time in milliseconds since the Unix epoch.",
      args: [],
      async onRender() {
        return Date.now().toString();
      },
    },
    {
      name: "time.parse",
      description:
        "Parses a date string into milliseconds since the Unix epoch. The input should be in ISO 8601 format (e.g., '2023-10-01T12:00:00Z').",
      args: [
        {
          type: "text",
          name: "dateString",
          placeholder: "2023-10-01T12:00:00Z",
        },
      ],
      async onRender(ctx, args) {
        return Date.parse(args.values.dateString!).toString();
      },
    },
  ],
};
