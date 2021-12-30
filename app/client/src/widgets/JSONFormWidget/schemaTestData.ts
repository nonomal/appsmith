import { DataType, FieldType } from "./constants";

const initialDataset = {
  dataSource: {
    name: "Test name",
    age: 20,
    dob: "10/12/2021",
    boolean: true,
    hobbies: ["travelling", "skating", "off-roading"],
    education: [
      {
        college: "String field ",
        number: 1,
        graduationDate: "10/12/2021",
        boolean: true,
      },
    ],
    address: {
      Line1: "String field ",
      city: "1",
    },
  },

  schemaOutput: {
    __root_schema__: {
      isDisabled: false,
      label: "",
      isVisible: true,
      children: {
        name: {
          isDisabled: false,
          label: "Name",
          isVisible: true,
          isSpellCheck: false,
          children: {},
          dataType: DataType.STRING,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.name))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.TEXT,
          sourceData: "Test name",
          isCustomField: false,
          name: "name",
          identifier: "name",
          position: 0,
        },
        age: {
          isDisabled: false,
          label: "Age",
          isVisible: true,
          isSpellCheck: false,
          children: {},
          dataType: DataType.NUMBER,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.age))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.NUMBER,
          sourceData: 20,
          isCustomField: false,
          name: "age",
          identifier: "age",
          position: 1,
        },
        dob: {
          closeOnSelection: false,
          dateFormat: "YYYY-MM-DD HH:mm",
          isDisabled: false,
          label: "Dob",
          maxDate: "2121-12-31T18:29:00.000Z",
          minDate: "1920-12-31T18:30:00.000Z",
          shortcuts: false,
          isVisible: true,
          children: {},
          dataType: DataType.STRING,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.dob))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.DATE,
          sourceData: "10/12/2021",
          isCustomField: false,
          name: "dob",
          identifier: "dob",
          position: 2,
        },
        boolean: {
          alignWidget: "LEFT",
          isDisabled: false,
          isVisible: true,
          label: "Boolean",
          children: {},
          dataType: DataType.BOOLEAN,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.boolean))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.SWITCH,
          sourceData: true,
          isCustomField: false,
          name: "boolean",
          identifier: "boolean",
          position: 3,
        },
        hobbies: {
          isDisabled: false,
          label: "Hobbies",
          isVisible: true,
          serverSideFiltering: false,
          options: [
            { label: "Blue", value: "BLUE" },
            { label: "Green", value: "GREEN" },
            { label: "Red", value: "RED" },
          ],
          children: {},
          dataType: DataType.ARRAY,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.hobbies))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.MULTI_SELECT,
          sourceData: ["travelling", "skating", "off-roading"],
          isCustomField: false,
          name: "hobbies",
          identifier: "hobbies",
          position: 4,
        },
        education: {
          isCollapsible: true,
          isDisabled: false,
          isVisible: true,
          label: "Education",
          children: {
            __array_item__: {
              isDisabled: false,
              label: "Array Item",
              isVisible: true,
              children: {
                college: {
                  isDisabled: false,
                  label: "College",
                  isVisible: true,
                  isSpellCheck: false,
                  children: {},
                  dataType: DataType.STRING,
                  defaultValue:
                    "{{((sourceData, formData, fieldState) => (sourceData.education[0].college))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
                  fieldType: FieldType.TEXT,
                  sourceData: "String field ",
                  isCustomField: false,
                  name: "college",
                  identifier: "college",
                  position: 0,
                },
                number: {
                  isDisabled: false,
                  label: "Number",
                  isVisible: true,
                  isSpellCheck: false,
                  children: {},
                  dataType: DataType.NUMBER,
                  defaultValue:
                    "{{((sourceData, formData, fieldState) => (sourceData.education[0].number))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
                  fieldType: FieldType.NUMBER,
                  sourceData: 1,
                  isCustomField: false,
                  name: "number",
                  identifier: "number",
                  position: 1,
                },
                graduationDate: {
                  closeOnSelection: false,
                  dateFormat: "YYYY-MM-DD HH:mm",
                  isDisabled: false,
                  label: "Graduation Date",
                  maxDate: "2121-12-31T18:29:00.000Z",
                  minDate: "1920-12-31T18:30:00.000Z",
                  shortcuts: false,
                  isVisible: true,
                  children: {},
                  dataType: DataType.STRING,
                  defaultValue:
                    "{{((sourceData, formData, fieldState) => (sourceData.education[0].graduationDate))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
                  fieldType: FieldType.DATE,
                  sourceData: "10/12/2021",
                  isCustomField: false,
                  name: "graduationDate",
                  identifier: "graduationDate",
                  position: 2,
                },
                boolean: {
                  alignWidget: "LEFT",
                  isDisabled: false,
                  isVisible: true,
                  label: "Boolean",
                  children: {},
                  dataType: DataType.BOOLEAN,
                  defaultValue:
                    "{{((sourceData, formData, fieldState) => (sourceData.education[0].boolean))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
                  fieldType: FieldType.SWITCH,
                  sourceData: true,
                  isCustomField: false,
                  name: "boolean",
                  identifier: "boolean",
                  position: 3,
                },
              },
              dataType: DataType.OBJECT,
              defaultValue:
                "{{((sourceData, formData, fieldState) => (sourceData.education[0]))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
              fieldType: FieldType.OBJECT,
              sourceData: {
                college: "String field ",
                number: 1,
                graduationDate: "10/12/2021",
                boolean: true,
              },
              isCustomField: false,
              name: "__array_item__",
              identifier: "__array_item__",
              position: -1,
            },
          },
          dataType: DataType.ARRAY,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.education))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.ARRAY,
          sourceData: [
            {
              boolean: true,
              college: "String field ",
              graduationDate: "10/12/2021",
              number: 1,
            },
          ],
          isCustomField: false,
          name: "education",
          identifier: "education",
          position: 5,
        },
        address: {
          isDisabled: false,
          label: "Address",
          isVisible: true,
          children: {
            Line1: {
              isDisabled: false,
              label: "Line 1",
              isVisible: true,
              isSpellCheck: false,
              children: {},
              dataType: DataType.STRING,
              defaultValue:
                "{{((sourceData, formData, fieldState) => (sourceData.address.Line1))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
              fieldType: FieldType.TEXT,
              sourceData: "String field ",
              isCustomField: false,
              name: "Line1",
              identifier: "Line1",
              position: 0,
            },
            city: {
              isSpellCheck: false,
              isDisabled: false,
              label: "City",
              isVisible: true,
              children: {},
              dataType: DataType.STRING,
              defaultValue:
                "{{((sourceData, formData, fieldState) => (sourceData.address.city))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
              fieldType: FieldType.TEXT,
              sourceData: "1",
              isCustomField: false,
              name: "city",
              identifier: "city",
              position: 1,
            },
          },
          dataType: DataType.OBJECT,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.address))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.OBJECT,
          sourceData: { Line1: "String field ", city: "1" },
          isCustomField: false,
          name: "address",
          identifier: "address",
          position: 6,
        },
      },
      dataType: DataType.OBJECT,
      defaultValue:
        "{{((sourceData, formData, fieldState) => (sourceData))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
      fieldType: FieldType.OBJECT,
      sourceData: {
        name: "Test name",
        age: 20,
        dob: "10/12/2021",
        boolean: true,
        hobbies: ["travelling", "skating", "off-roading"],
        education: [
          {
            college: "String field ",
            number: 1,
            graduationDate: "10/12/2021",
            boolean: true,
          },
        ],
        address: {
          Line1: "String field ",
          city: "1",
        },
      },
      isCustomField: false,
      name: "",
      identifier: "",
      position: -1,
    },
  },
};

const withRemovedKeyFromInitialDataset = {
  dataSource: {
    name: "Test name",
    age: 20,
    dob: "10/12/2021",
    hobbies: ["travelling", "skating", "off-roading"],
    education: [
      {
        college: "String field ",
        number: 1,
        graduationDate: "10/12/2021",
        boolean: true,
      },
    ],
    address: {
      Line1: "String field ",
      city: "1",
    },
  },

  schemaOutput: {
    __root_schema__: {
      isDisabled: false,
      label: "",
      isVisible: true,
      children: {
        name: {
          isDisabled: false,
          label: "Name",
          isVisible: true,
          isSpellCheck: false,
          children: {},
          dataType: DataType.STRING,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.name))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.TEXT,
          sourceData: "Test name",
          isCustomField: false,
          name: "name",
          identifier: "name",
          position: 0,
        },
        age: {
          isDisabled: false,
          label: "Age",
          isVisible: true,
          isSpellCheck: false,
          children: {},
          dataType: DataType.NUMBER,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.age))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.NUMBER,
          sourceData: 20,
          isCustomField: false,
          name: "age",
          identifier: "age",
          position: 1,
        },
        dob: {
          closeOnSelection: false,
          dateFormat: "YYYY-MM-DD HH:mm",
          isDisabled: false,
          label: "Dob",
          maxDate: "2121-12-31T18:29:00.000Z",
          minDate: "1920-12-31T18:30:00.000Z",
          shortcuts: false,
          isVisible: true,
          children: {},
          dataType: DataType.STRING,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.dob))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.DATE,
          sourceData: "10/12/2021",
          isCustomField: false,
          name: "dob",
          identifier: "dob",
          position: 2,
        },
        hobbies: {
          isDisabled: false,
          label: "Hobbies",
          isVisible: true,
          serverSideFiltering: false,
          options: [
            { label: "Blue", value: "BLUE" },
            { label: "Green", value: "GREEN" },
            { label: "Red", value: "RED" },
          ],
          children: {},
          dataType: DataType.ARRAY,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.hobbies))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.MULTI_SELECT,
          sourceData: ["travelling", "skating", "off-roading"],
          isCustomField: false,
          name: "hobbies",
          identifier: "hobbies",
          position: 4,
        },
        education: {
          isCollapsible: true,
          isDisabled: false,
          isVisible: true,
          label: "Education",
          children: {
            __array_item__: {
              isDisabled: false,
              label: "Array Item",
              isVisible: true,
              children: {
                college: {
                  isDisabled: false,
                  label: "College",
                  isVisible: true,
                  isSpellCheck: false,
                  children: {},
                  dataType: DataType.STRING,
                  defaultValue:
                    "{{((sourceData, formData, fieldState) => (sourceData.education[0].college))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
                  fieldType: FieldType.TEXT,
                  sourceData: "String field ",
                  isCustomField: false,
                  name: "college",
                  identifier: "college",
                  position: 0,
                },
                number: {
                  isDisabled: false,
                  label: "Number",
                  isVisible: true,
                  isSpellCheck: false,
                  children: {},
                  dataType: DataType.NUMBER,
                  defaultValue:
                    "{{((sourceData, formData, fieldState) => (sourceData.education[0].number))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
                  fieldType: FieldType.NUMBER,
                  sourceData: 1,
                  isCustomField: false,
                  name: "number",
                  identifier: "number",
                  position: 1,
                },
                graduationDate: {
                  closeOnSelection: false,
                  dateFormat: "YYYY-MM-DD HH:mm",
                  isDisabled: false,
                  label: "Graduation Date",
                  maxDate: "2121-12-31T18:29:00.000Z",
                  minDate: "1920-12-31T18:30:00.000Z",
                  shortcuts: false,
                  isVisible: true,
                  children: {},
                  dataType: DataType.STRING,
                  defaultValue:
                    "{{((sourceData, formData, fieldState) => (sourceData.education[0].graduationDate))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
                  fieldType: FieldType.DATE,
                  sourceData: "10/12/2021",
                  isCustomField: false,
                  name: "graduationDate",
                  identifier: "graduationDate",
                  position: 2,
                },
                boolean: {
                  alignWidget: "LEFT",
                  isDisabled: false,
                  isVisible: true,
                  label: "Boolean",
                  children: {},
                  dataType: DataType.BOOLEAN,
                  defaultValue:
                    "{{((sourceData, formData, fieldState) => (sourceData.education[0].boolean))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
                  fieldType: FieldType.SWITCH,
                  sourceData: true,
                  isCustomField: false,
                  name: "boolean",
                  identifier: "boolean",
                  position: 3,
                },
              },
              dataType: DataType.OBJECT,
              defaultValue:
                "{{((sourceData, formData, fieldState) => (sourceData.education[0]))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
              fieldType: FieldType.OBJECT,
              sourceData: {
                college: "String field ",
                number: 1,
                graduationDate: "10/12/2021",
                boolean: true,
              },
              isCustomField: false,
              name: "__array_item__",
              identifier: "__array_item__",
              position: -1,
            },
          },
          dataType: DataType.ARRAY,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.education))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.ARRAY,
          sourceData: [
            {
              boolean: true,
              college: "String field ",
              graduationDate: "10/12/2021",
              number: 1,
            },
          ],
          isCustomField: false,
          name: "education",
          identifier: "education",
          position: 5,
        },
        address: {
          isDisabled: false,
          label: "Address",
          isVisible: true,
          children: {
            Line1: {
              isDisabled: false,
              label: "Line 1",
              isVisible: true,
              isSpellCheck: false,
              children: {},
              dataType: DataType.STRING,
              defaultValue:
                "{{((sourceData, formData, fieldState) => (sourceData.address.Line1))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
              fieldType: FieldType.TEXT,
              sourceData: "String field ",
              isCustomField: false,
              name: "Line1",
              identifier: "Line1",
              position: 0,
            },
            city: {
              isDisabled: false,
              label: "City",
              isSpellCheck: false,
              isVisible: true,
              children: {},
              dataType: DataType.STRING,
              defaultValue:
                "{{((sourceData, formData, fieldState) => (sourceData.address.city))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
              fieldType: FieldType.TEXT,
              sourceData: "1",
              isCustomField: false,
              name: "city",
              identifier: "city",
              position: 1,
            },
          },
          dataType: DataType.OBJECT,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.address))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.OBJECT,
          sourceData: { Line1: "String field ", city: "1" },
          isCustomField: false,
          name: "address",
          identifier: "address",
          position: 6,
        },
      },
      dataType: DataType.OBJECT,
      defaultValue:
        "{{((sourceData, formData, fieldState) => (sourceData))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
      fieldType: FieldType.OBJECT,
      sourceData: {
        name: "Test name",
        age: 20,
        dob: "10/12/2021",
        hobbies: ["travelling", "skating", "off-roading"],
        education: [
          {
            college: "String field ",
            number: 1,
            graduationDate: "10/12/2021",
            boolean: true,
          },
        ],
        address: {
          Line1: "String field ",
          city: "1",
        },
      },
      isCustomField: false,
      name: "",
      identifier: "",
      position: -1,
    },
  },
};

const withRemovedAddedKeyToInitialDataset = {
  dataSource: {
    name: "Test name",
    age: 20,
    dob: "10/12/2021",
    gender: "male",
    hobbies: ["travelling", "skating", "off-roading"],
    education: [
      {
        college: "String field ",
        number: 1,
        graduationDate: "10/12/2021",
        boolean: true,
      },
    ],
    address: {
      Line1: "String field ",
      city: "1",
    },
  },

  schemaOutput: {
    __root_schema__: {
      isDisabled: false,
      label: "",
      isVisible: true,
      children: {
        name: {
          isDisabled: false,
          label: "Name",
          isVisible: true,
          isSpellCheck: false,
          children: {},
          dataType: DataType.STRING,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.name))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.TEXT,
          sourceData: "Test name",
          isCustomField: false,
          name: "name",
          identifier: "name",
          position: 0,
        },
        age: {
          isDisabled: false,
          label: "Age",
          isVisible: true,
          isSpellCheck: false,
          children: {},
          dataType: DataType.NUMBER,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.age))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.NUMBER,
          sourceData: 20,
          isCustomField: false,
          name: "age",
          identifier: "age",
          position: 1,
        },
        dob: {
          closeOnSelection: false,
          dateFormat: "YYYY-MM-DD HH:mm",
          isDisabled: false,
          label: "Dob",
          maxDate: "2121-12-31T18:29:00.000Z",
          minDate: "1920-12-31T18:30:00.000Z",
          shortcuts: false,
          isVisible: true,
          children: {},
          dataType: DataType.STRING,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.dob))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.DATE,
          sourceData: "10/12/2021",
          isCustomField: false,
          name: "dob",
          identifier: "dob",
          position: 2,
        },
        hobbies: {
          isDisabled: false,
          label: "Hobbies",
          isVisible: true,
          serverSideFiltering: false,
          options: [
            { label: "Blue", value: "BLUE" },
            { label: "Green", value: "GREEN" },
            { label: "Red", value: "RED" },
          ],
          children: {},
          dataType: DataType.ARRAY,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.hobbies))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.MULTI_SELECT,
          sourceData: ["travelling", "skating", "off-roading"],
          isCustomField: false,
          name: "hobbies",
          identifier: "hobbies",
          position: 3,
        },
        education: {
          isCollapsible: true,
          isDisabled: false,
          isVisible: true,
          label: "Education",
          children: {
            __array_item__: {
              isDisabled: false,
              label: "Array Item",
              isVisible: true,
              children: {
                college: {
                  isDisabled: false,
                  label: "College",
                  isVisible: true,
                  isSpellCheck: false,
                  children: {},
                  dataType: DataType.STRING,
                  defaultValue:
                    "{{((sourceData, formData, fieldState) => (sourceData.education[0].college))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
                  fieldType: FieldType.TEXT,
                  sourceData: "String field ",
                  isCustomField: false,
                  name: "college",
                  identifier: "college",
                  position: 0,
                },
                number: {
                  isDisabled: false,
                  label: "Number",
                  isVisible: true,
                  isSpellCheck: false,
                  children: {},
                  dataType: DataType.NUMBER,
                  defaultValue:
                    "{{((sourceData, formData, fieldState) => (sourceData.education[0].number))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
                  fieldType: FieldType.NUMBER,
                  sourceData: 1,
                  isCustomField: false,
                  name: "number",
                  identifier: "number",
                  position: 1,
                },
                graduationDate: {
                  closeOnSelection: false,
                  dateFormat: "YYYY-MM-DD HH:mm",
                  isDisabled: false,
                  label: "Graduation Date",
                  maxDate: "2121-12-31T18:29:00.000Z",
                  minDate: "1920-12-31T18:30:00.000Z",
                  shortcuts: false,
                  isVisible: true,
                  children: {},
                  dataType: DataType.STRING,
                  defaultValue:
                    "{{((sourceData, formData, fieldState) => (sourceData.education[0].graduationDate))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
                  fieldType: FieldType.DATE,
                  sourceData: "10/12/2021",
                  isCustomField: false,
                  name: "graduationDate",
                  identifier: "graduationDate",
                  position: 2,
                },
                boolean: {
                  alignWidget: "LEFT",
                  isDisabled: false,
                  isVisible: true,
                  label: "Boolean",
                  children: {},
                  dataType: DataType.BOOLEAN,
                  defaultValue:
                    "{{((sourceData, formData, fieldState) => (sourceData.education[0].boolean))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
                  fieldType: FieldType.SWITCH,
                  sourceData: true,
                  isCustomField: false,
                  name: "boolean",
                  identifier: "boolean",
                  position: 3,
                },
              },
              dataType: DataType.OBJECT,
              defaultValue:
                "{{((sourceData, formData, fieldState) => (sourceData.education[0]))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
              fieldType: FieldType.OBJECT,
              sourceData: {
                college: "String field ",
                number: 1,
                graduationDate: "10/12/2021",
                boolean: true,
              },
              isCustomField: false,
              name: "__array_item__",
              identifier: "__array_item__",
              position: -1,
            },
          },
          dataType: DataType.ARRAY,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.education))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.ARRAY,
          sourceData: [
            {
              boolean: true,
              college: "String field ",
              graduationDate: "10/12/2021",
              number: 1,
            },
          ],
          isCustomField: false,
          name: "education",
          identifier: "education",
          position: 4,
        },
        address: {
          isDisabled: false,
          label: "Address",
          isVisible: true,
          children: {
            Line1: {
              isDisabled: false,
              label: "Line 1",
              isVisible: true,
              isSpellCheck: false,
              children: {},
              dataType: DataType.STRING,
              defaultValue:
                "{{((sourceData, formData, fieldState) => (sourceData.address.Line1))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
              fieldType: FieldType.TEXT,
              sourceData: "String field ",
              isCustomField: false,
              name: "Line1",
              identifier: "Line1",
              position: 0,
            },
            city: {
              isSpellCheck: false,
              isDisabled: false,
              label: "City",
              isVisible: true,
              children: {},
              dataType: DataType.STRING,
              defaultValue:
                "{{((sourceData, formData, fieldState) => (sourceData.address.city))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
              fieldType: FieldType.TEXT,
              sourceData: "1",
              isCustomField: false,
              name: "city",
              identifier: "city",
              position: 1,
            },
          },
          dataType: DataType.OBJECT,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.address))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.OBJECT,
          sourceData: { Line1: "String field ", city: "1" },
          isCustomField: false,
          name: "address",
          identifier: "address",
          position: 5,
        },
        gender: {
          isDisabled: false,
          label: "Gender",
          isVisible: true,
          isSpellCheck: false,
          children: {},
          dataType: DataType.STRING,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.gender))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.TEXT,
          sourceData: "male",
          isCustomField: false,
          name: "gender",
          identifier: "gender",
          position: 6,
        },
      },
      dataType: DataType.OBJECT,
      defaultValue:
        "{{((sourceData, formData, fieldState) => (sourceData))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
      fieldType: FieldType.OBJECT,
      sourceData: {
        name: "Test name",
        age: 20,
        dob: "10/12/2021",
        gender: "male",
        hobbies: ["travelling", "skating", "off-roading"],
        education: [
          {
            college: "String field ",
            number: 1,
            graduationDate: "10/12/2021",
            boolean: true,
          },
        ],
        address: {
          Line1: "String field ",
          city: "1",
        },
      },
      isCustomField: false,
      name: "",
      identifier: "",
      position: -1,
    },
  },
};

export default {
  initialDataset,
  withRemovedKeyFromInitialDataset,
  withRemovedAddedKeyToInitialDataset,
};
