register({
  name: 'my_color_picker',
  layout: 'bottom',
  Widget: createWidget({
    render(value) {
      return `
        <input class="color-value" value=${value} />
        <button class="red">Red</button>
        <button class="green">Green</button>
        <button class="blue">Blue</button>
      `
    },
    mount(node, value, updateValue) {
      var input = node.getElementsByClassName('color-value')[0]
      input.onchange = function(event) {
        updateValue(event.target.value)
      }

      var redButton = node.getElementsByClassName('red')[0]
      redButton.onclick = function() {
        updateValue('#f00')
      }

      var greenButton = node.getElementsByClassName('green')[0]
      greenButton.onclick = function() {
        updateValue('#0f0')
      }

      var blueButton = node.getElementsByClassName('blue')[0]
      blueButton.onclick = function() {
        updateValue('#00f')
      }
    }
  })
});

registerTool({
  type: 'whatever',
  category: 'contents',
  label: 'My Tool',
  icon: 'fa-smile',
  values: {
  },
  options: {
    default: {
      title: null,
    },
    text: {
      title: "Text",
      position: 1,
      options: {
        "color": {
          "label": "Color",
          "defaultValue": "#000",
          "widget": "my_color_picker"
        }
      },
    }
  },
  renderer: {
    Viewer:createViewer({
      render(values) {
        return `
          <div style="color: ${values.color};">I am a custom tool.</div>
        `
      }
    }),
    exporters: {
      web: function() {
      },
      email: function() {
      }
    },
  },
});





































































































/*
import React from "react";

// Custom Property Editor

const MyColorPicker = (props) => {
  const { label, value, updateValue, data } = props;

  return (
    <div>
      <div>My React Color Picker</div>
      <input
        class="color-value"
        defaultValue={value}
        onChange={(e) => updateValue(e.target.value)}
      />
      <button class="red" onClick={() => updateValue('#f00')}>
        Red
      </button>
      <button class="green" onClick={() => updateValue('#0f0')}>
        Green
      </button>
      <button class="blue" onClick={() => updateValue('#00f')}>
        Blue
      </button>
    </div>
  );
};

registerPropertyEditor({
  name: 'my_color_picker',
  Widget: MyColorPicker,
});

// Custom Tool

const Viewer = () => {
  return <div>I am a custom tool.</div>;
};

registerTool({
  name: 'my_tool',
  label: 'My Tool',
  icon: 'fa-smile',
  supportedDisplayModes: ['web', 'email'],
  options: {
    default: {
      title: null,
    },
    text: {
      title: 'Text',
      position: 1,
      options: {
        textColor: {
          label: 'Color',
          defaultValue: '#ff0000',
          widget: 'my_color_picker', // React custom property editor
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: Viewer, // React custom tool
    exporters: {
      web: function (values) {
        return `<div style="color: ${values.textColor};">I am a custom tool.</div>`;
      },
      email: function (values) {
        return `<div style="color: ${values.textColor};">I am a custom tool.</div>`;
      },
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});
*/