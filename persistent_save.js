class persistent_save {
    getInfo() {
        return {
            id: 'persistent_save',
            name: 'Persistent Save',
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
            ]
        };
    }
    strictlyEquals(args) {
        return args.ONE === args.TWO;
    }
}
Scratch.extensions.register(new persistent_save());