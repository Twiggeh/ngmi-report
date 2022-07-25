import { APIClient } from '../src/APIClient';
import { WebSocketClient } from '../src/tcp/';

console.log(WebSocketClient, APIClient);

window.wireExports = {
	APIClient,
	WebSocketClient,
};
