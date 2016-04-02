var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');
var socket = io();

console.log(name + ' wants to join ' + room);
jQuery('.room-title').text(room);

socket.on('connect', function() {
	console.log('Connected to socket.io server!');
 
    socket.emit('joinRoom', {
        name: name,
        room: room
    });
});

socket.on('message', function(message) { 
 	console.log('New message:');
 	console.log(message.text);
    var timestamp = moment.utc(message.timestamp);
 
 	//jQuery('.messages').append('<p>' + message.text + '</p');
 	//jQuery('.messages').append('<p>' + timestr + '</p');
    var $messages = jQuery('.messages');
    var $message = jQuery('<li class="list-group-item"></li>');
    
    $message.append('<p><strong>' + message.name + ' ' + timestamp.local().format('h:mm a') + '</strong></p>');
    $message.append('<p>' + message.text + '</p>'); 
    $messages.append($message);
});

// handles submitting a new message 
var $form = jQuery('#message-form');

$form.on('submit', function(event){
    event.preventDefault(); // will messagehandle submission ourselves
    
    socket.emit('message',{
        name: name,
        text: $form.find('input[name=message]').val()                   
    });
    
    //clear the inut box
    $form.find('input[name=message]').val('');
});