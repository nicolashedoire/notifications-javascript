document.querySelector('#btn-success').addEventListener('click', Notification.bind(null , 'success', 'success'), false);
document.querySelector('#btn-error').addEventListener('click', Notification.bind(null , 'error', 'Fatal error'), false);
document.querySelector('#btn-info').addEventListener('click', Notification.bind(null , 'info', 'Infos'), false);
document.querySelector('#btn-warning').addEventListener('click', Notification.bind(null , 'warning', 'Warning'), false);


var notification;
var container = document.querySelector('body');
var queue = [];
var box = document.createElement('div');
box.className = 'box';
container.appendChild(box);

function Notification(type , message) {
    notification = document.createElement('div');
    notification.className = 'notification notification-' + type;
    var msg = document.createElement('div');
    msg.className = 'notification-message';
    msg.innerHTML = message;
    notification.appendChild(msg);
    box.insertBefore(notification, box.firstChild);
    notification.addEventListener('animationend', hideNotification, false);
    queue.push(notification);
}

function hideNotification(){
  box.removeChild(queue[0]);
  queue.shift();
}