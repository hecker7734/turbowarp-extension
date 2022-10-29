class morestuffExtension {
  getInfo() {
    return {
      id: 'morestuff', // change this if you make an actual extension!
      name: 'Strict Equality',
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
        }
      ]
    };
  }
  strictlyEquals(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return args.ONE === args.TWO;
  }
}
Scratch.extensions.register(new morestuffExtension());
