

class morestuffExtension {
  getInfo() {
    return {
      id: 'morestuff',
      name: 'More Stuff',
      blocks: [
        {
          opcode: 'help',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Help',
          arguments: {}
        },
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] === [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'n'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'n'
            }
          }
        },
        {
          opcode: 'LooslyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] = [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'n'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'n'
            }
          }
        },
        {
          opcode: 'RootOf',
          blockType: Scratch.BlockType.REPORTER,
          text: '[ONE]√[TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '2'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '2'
            }
          }
        },
        {
          opcode: 'Exponent',
          blockType: Scratch.BlockType.REPORTER,
          text: '[ONE]^[TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '2'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '2'
            }
          }
        },
        {
          opcode: 'UpperCase',
          blockType: Scratch.BlockType.REPORTER,
          text: 'String.UpperCase[ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' '
            },
          }
        },
        {
          opcode: 'LowerCase',
          blockType: Scratch.BlockType.REPORTER,
          text: 'String.LowerCase[ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' '
            },
          }
        },
        {
          opcode: 'TeamTyper',
          blockType: Scratch.BlockType.REPORTER,
          text: 'String.TeamTyper[ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' '
            },
          }
        },
        {
          opcode: 'StringReverse',
          blockType: Scratch.BlockType.REPORTER,
          text: 'String.Reverse[ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' '
            },
          }
        },
        {
          opcode: 'jsalert',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Javascript Alert : [MESSAGE]',
          arguments: {
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' '
            },
          }
        },
        {
          opcode: 'comb',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Combinations of [LIST]',
          arguments: {
            LIST: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' '
            },
          }
        },
        {
          opcode: 'getfetch',
          blockType: Scratch.BlockType.REPORTER,
          text: 'GET [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://'
            }
          },
        },
        {
          opcode: 'regexSearcherCount',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Regex Search Pattern [PATTERN] Search String [STRING] And Return Count',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apples are better then _apples_'
            },
            PATTERN: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '/apple/gi'
            }
          }
        },
      ]
    };
  }
  strictlyEquals(args) {
    return args.ONE === args.TWO;
  }
  LooslyEquals(args) {
    return args.ONE == args.TWO;
  }
  RootOf(args) {
    function nthroot(x, n) {
      try {
        var negate = n % 2 == 1 && x < 0;
        if(negate)
          x = -x;
        var possible = Math.pow(x, 1 / n);
        n = Math.pow(possible, n);
        if(Math.abs(x - n) < 1 && (x > 0 == n > 0))
          return negate ? -possible : possible;
      } catch(e){}
    }
    return nthroot(args.TWO,args.ONE);
  }
  Exponent(args){
    return Math.pow(args.ONE,args.TWO);
  }
  UpperCase(args){
    return args.ONE.toUpperCase();
  }
  LowerCase(args){
    return args.ONE.toLowerCase();
  }
  TeamTyper(args){
    var newstr = "";
    for (let i = 0; i < args.ONE.length; i++) {
      const shoulddo = (i/2).toString().includes("."); //divide by 2, check for a decimal point
      if (shoulddo) {
        newstr += args.ONE.charAt(i).toUpperCase()
      } else {
        newstr += args.ONE.charAt(i).toLowerCase()
      }
    }
    return newstr;
  }
  StringReverse(args){
    return args.ONE.split("").reverse().join("");
  }
  getfetch(args) {
    return fetch(args.URL)
      .then(r => r.text())
      .catch(() => '');
  }
  help(args){
    return fetch('https://hecker7734.github.io/turbowarp-extension/README.md')
    .then(r => r.text())
    .catch(() => '');
  }
  comb(args){
        var combs = []
           for (let j = 0; j < args.LIST.length; j++) {
              for (let i = 0; i < args.LIST.length; i++) {
                 combs.push(args.LIST[i] + args.LIST[j]);
            }
        }
        return combs;
  }
  regexSearcherCount(args){
    let text = args.STRING;
    let count = (text.match(args.PATTERN) || []).length;
    return count
  }
}
Scratch.extensions.register(new morestuffExtension());


