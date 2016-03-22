 var socket = io();

 socket.on('connect', function() {
	console.log('Connected to socket.io server!');
 });

 socket.on('message', function(message) {
 	console.log('New message:');
 	console.log(message.text);
 	jQuery('.messages').append('<p>' + message.text + '</p');
     
 });

// handles submitting a new message
var $form = jQuery('#message-form');

$form.on('submit', function(event){
    event.preventDefault(); // will messagehandle submission ourselves
    
    socket.emit('message',{text: $form.find('input[name=message]').val()});
    
    //clear the inut box
    $form.find('input[name=message]').val('');
});