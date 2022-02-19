
export const text = [
    `Signalling communications overview.
    
    `,
    `Peer-1 requests a new Websocket, generating an http upgrade request. 
    
    `,
    `Our Deploy-Isolate generates a new peer connection instance that contains both a WebSocket instance 
        and a BroadcastChannel instance.
    `,
    `These communication instances are 'message-coupled', each passes its output to the others input.
        Peer-1 recieves a new unique ID from the connection, and will initialize the signalling process.
    `,
        
    `Peer-1 sends out a WebRtc probe message; an 'Invite'. As Peer-1 is alone, no acceptance will come. 
        Note that the Isolate does not contain or maintain any state. All state is maintained by the peers.
    `,
    `A second peer (Peer-2) makes another socket upgrade request to either this, or to another Isolate instance. 
        The isolate will generate a new peer connection instance, identical to the first.
    `,
    `This peer connection also contains both a WebSocket instance and a BroadcastChannel instance.
        Both peers are now listening for the same BroadcastChannel topic, (same channel!)
    `,
    `The communication instances in this peer connection are also 'message' coupled. 
        Peer-2 now recieves its unique ID. This will initiate the signalling process.
    `,
    `As part of its signalling-initialization, Peer-2 will send a WebRtc probe message; an 'Invitation'. 
    
    `,
    `Peer-1 recieves this invitation message and replies with an 'accept' response.
    
    `,
    `At this point, both peers will use the <WebSocket<->BroadcastChannel<->WebSocket> signalling
        service to negociate the establishment of a new peer-to-peer WebRtc Connection and DataChannel. 
    `,
    `As the signalling communication is no longer required, both peers may elect to disconnect from their isolate(s).
    
    `,
]