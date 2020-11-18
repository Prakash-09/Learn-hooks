module.exports.FIELDS = [
    {
        id: "one",
        label: "Name",
        key: "name",
        type: "text",
    },{
        id: "two",
        label: "Age",
        key: "age",
        type: "number",
    },
    {
        id: "three",
        label: "Gender",
        key: "gender",
        type: "select",
        options: [
            { label: "Male", value:"Male" },
            { label: "Female", value:"Female" }
        ]
    }
]