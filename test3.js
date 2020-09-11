const icon = "data:image/png;base64,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";

class Web {

  constructor() {}

  getInfo() {
    return {
      id: 'web',
      name: 'Web',

      color1: '#00d8ff',
      color2: '#00d8ff',
      color3: '#00d8ff',

      menuIconURI: icon,

      blocks: [
        {
          opcode: 'goToUrl',

          blockType: Scratch.BlockType.COMMAND,

          text: 'go to URL [TextURL]',
          arguments: {
            TextURL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://google.com/'
            }
          }
        },
        {
          opcode: 'isLessOrEqual',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] <= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'isMoreOrEqual',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] >= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'trueBlock',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'true'
        },
        {
          opcode: 'falseBlock',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'false'
        },
        {
          opcode: 'exponent',

          blockType: Scratch.BlockType.REPORTER,

          text: '[A] ^ [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        },
        {
          opcode: 'pi',
          blockType: Scratch.BlockType.REPORTER,
          text: 'pi'
        },
        {
          opcode: 'ternaryOperator',

          blockType: Scratch.BlockType.REPORTER,

          text: 'if [A] then [B] else [C]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.BOOLEAN
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          opcode: 'letters',

          blockType: Scratch.BlockType.REPORTER,

          text: 'letters [START] to [END] of [STRING]',
          arguments: {
            START: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            },
            END: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 7
            },
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'red apple'
            }
          }
        },
        {
          opcode: 'currentMillisecond',
          blockType: Scratch.BlockType.REPORTER,
          text: 'current millisecond'
        },
        {
          opcode: 'fetchFrom',

          blockType: Scratch.BlockType.REPORTER,

          text: 'get content from [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://translate-service.scratch.mit.edu/translate?language=eo&text=hello'
            }
          }
        },
        {
          opcode: 'parseJSON',

          blockType: Scratch.BlockType.REPORTER,

          text: '[PATH] of [JSON_STRING]',
          arguments: {
            PATH: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'fruit/apples'
            },
            JSON_STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"fruit": {"apples": 2, "bananas": 3}, "total_fruit": 5}'
            }
          }
        },
        {
          opcode: 'stringToBoolean',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'true'
            }
          }
        },
        {
          opcode: 'regexReplace',

          blockType: Scratch.BlockType.REPORTER,

          text: 'replace [STRING] using the rule [REGEX] with [NEWSTRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'bananas are awesome. i like bananas.'
            },
            REGEX: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            },
            NEWSTRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        }
      ]
    }
  }

  goToUrl({TextURL}) {
    window.open("TextURL");
  }

  isLessOrEqual({A, B}) {
    return A <= B;
  }

  isMoreOrEqual({A, B}) {
    return A >= B;
  }

  trueBlock() {
    return true;
  }

  falseBlock() {
    return false;
  }

  exponent({A, B}) {
    return Math.pow(A, B);
  }

  pi() {
    return Math.PI;
  }

  ternaryOperator({A, B, C}) {
    return A ? B : C;
  }

  letters({STRING, START, END}) {
    return STRING.slice(Math.max(1, START) - 1, Math.min(STRING.length, END));
  }

  currentMillisecond() {
    return Date.now() % 1000;
  }

  fetchFrom({URL}) {
    return fetch(URL).then(res => res.text())
      .catch(err => '');
  }

  parseJSON({PATH, JSON_STRING}) {
    try {
      const path = PATH.toString().split('/').map(prop => decodeURIComponent(prop));
      if (path[0] === '') path.splice(0, 1);
      if (path[path.length - 1] === '') path.splice(-1, 1);
      let json;
      try {
        json = JSON.parse(' ' + JSON_STRING);
      } catch (e) {
        return e.message;
      }
      path.forEach(prop => json = json[prop]);
      if (json === null) return 'null';
      else if (json === undefined) return '';
      else if (typeof json === 'object') return JSON.stringify(json);
      else return json.toString();
    } catch (err) {
      return '';
    }
  }

  stringToBoolean({STRING}) {
    return STRING;
  }

  regexReplace({STRING, REGEX, NEWSTRING}) {
    return STRING.toString().replace(new RegExp(REGEX, 'gi'), NEWSTRING);
  }

}

Scratch.extensions.register(new Web());
