<p align="center">
    <img src="https://i.imgur.com/Y7tzNEI.png" alt="TgKit Logo" width="128" height="128">
    <h1 align="center">TgKit</h1>
</p>

<p align="center">
  <a aria-label="License" href="https://github.com/sadnesszephyr/tgkit/blob/main/license">
    <img
		alt="License"
		src="https://img.shields.io/github/license/sadnesszephyr/tgkit?style=for-the-badge&labelColor=1A1A1A"
	>
  </a>
  <a aria-label="Bot API version">
    <img
		alt="Telegram Bot API version"
		src="https://img.shields.io/badge/Bot%20API-7.6-1d98dc?labelColor=%231A1A1A&logo=telegram&logoColor=%23FFF&style=for-the-badge"
	>
  </a>
</p>

## About

> [!WARNING]  
> **This library is under development!** It doesn't yet cover Telegram Bot API 100% and may contain bugs. Library API may change at any time. Use it in production at your own risk.  
> **None of the code is generated**. Every type and structure is hand-written, hence there can be some mistakes. Please open an issue if you find any!

TgKit is library for interacting with [Telegram Bot API](https://core.telegram.org/bots/api)

### Features

-   Lightweight
-   Object-oriented, has predictable abstractions and [Typescript](https://typescriptlang.org/) type defentitions included

## Example

```ts
import { Client } from 'tgkit';

const client = new Client({
	// Create bot and get token via @botfather
	token: '0123456789:PUtY0uR0WNT37egR4m8oTtOk3NHer3-tMnK',
});

client.on('message', async (message) => {
	if (message.text.startsWith('/start')) {
		await message.chat.sendMessage("Hello World! I'm a brand new TgKit bot");
		await message.chat.sendMessage('✌️');
	}
});

client.polling.start();
```
