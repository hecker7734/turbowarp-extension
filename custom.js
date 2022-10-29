class morestuffExtension {
  getInfo() {
    return {
      id: 'morestuff',
      name: 'More Stuff',
      blocks: [
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
    return args.ONE.toUpperCase()
  }
}
Scratch.extensions.register(new morestuffExtension());
