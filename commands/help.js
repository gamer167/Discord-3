module.exports = {
	name: 'Help',
	description: 'Get the cmds',
	execute(message) {
    message.channel.send('!help get the cmds, !server get server name,');
    message.channel.send('msgs, !ping to reply pong, !beep to reply boop,')
    message.channel.send('!avatar to get your avatar, !args-info foo to reply bar,')
    message.channel.send('!user-info to get info about your self')
		}
}
