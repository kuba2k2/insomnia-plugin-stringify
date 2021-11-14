module.exports.templateTags = [{
    name: 'stringify',
    displayName: 'Stringify',
    description: 'Object to JSON string.',
    args: [
		{
			name: 'path',
			displayName: 'Path',
			type: 'string',
			placeholder: 'Path to an environment object',
		},
    ],
    async run (context, path) {
		const obj = _.get(context.context, path);
		return JSON.stringify(obj);
    }
}];
