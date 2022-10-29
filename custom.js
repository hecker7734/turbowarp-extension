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
          text: '[ROOT]√[VALUE]',
          arguments: {
            ROOT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Root'
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'VALUE'
            }
          }
        },
        //Math.pow(2, 1/3)
      ]
    };
  }
  strictlyEquals(args) {
    return args.ONE === args.TWO;
  }
  LooslyEquals(args) {
    return args.ROOT == args.VALUE;
  }
  RootOf(args) {
    return Math.pow(args.TWO, 1,args.ONE)
  }
}
Scratch.extensions.register(new morestuffExtension());
