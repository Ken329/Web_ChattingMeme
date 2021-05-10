var _0x412f=['<p>','display','1451618zbGuaG','then','<div\x20class=\x22chat-message\x22>',
'134dATLLA','8642McYagG','<h4>','value','getElementById','addEventListener','initializeApp',
'\x20.\x20Logout','val','forEach','main_name','12eusvLl','form_name','hey-yo-236f5.firebaseapp.com',
'G-YX4HZVQTQ8','chat','form_button','main_container','block','child','sender','database','2696422apZCIE',
'login','1:897710580690:web:2abe787e5e24cd8c2bde0b','click','</h4>','49xVzgii','innerHTML','backgroundColor',
'style','1788207HhxoGP','AIzaSyAjV-TmrwEX026tX72OxwyelgyqLhGWmp0','37473ZkuMxf','hey-yo-236f5.appspot.com','ref',
'</div>','none','24237rRCREj','numChildren','#e7e7e7','</p>','1183088jAExyr','https://hey-yo-236f5-default-rtdb.firebaseio.com'];
var _0x21283a=_0x23ff;(function(_0x272539,_0x33709d){var _0x2c747d=_0x23ff;while(!![]){try{var _0x4f3393=parseInt(_0x2c747d(0x185))*
    parseInt(_0x2c747d(0x15f))+parseInt(_0x2c747d(0x16b))*parseInt(_0x2c747d(0x16a))+parseInt(_0x2c747d(0x167))+
    parseInt(_0x2c747d(0x163))+-parseInt(_0x2c747d(0x189))+parseInt(_0x2c747d(0x18b))*parseInt(_0x2c747d(0x175))+-
    parseInt(_0x2c747d(0x180));if(_0x4f3393===_0x33709d)break;else _0x272539['push'](_0x272539['shift']());}catch(_0x5a8773)
    {_0x272539['push'](_0x272539['shift']());}}}(_0x412f,0xe6cf2));var firebaseConfig={'apiKey':_0x21283a(0x18a),
    'authDomain':_0x21283a(0x177),'databaseURL':_0x21283a(0x164),'projectId':'hey-yo-236f5','storageBucket':_0x21283a(0x18c),
    'messagingSenderId':'897710580690','appId':_0x21283a(0x182),'measurementId':_0x21283a(0x178)};
    function _0x23ff(_0x10df93,_0x1a2f6e){_0x10df93=_0x10df93-0x15c;var _0x412f27=_0x412f[_0x10df93];return _0x412f27;}
    firebase[_0x21283a(0x170)](firebaseConfig);var formLogin=document[_0x21283a(0x16e)](_0x21283a(0x181)),
    loginName=document[_0x21283a(0x16e)](_0x21283a(0x176)),loginBtn=document[_0x21283a(0x16e)](_0x21283a(0x17a)),
    mainCon=document[_0x21283a(0x16e)](_0x21283a(0x17b)),mainName=document[_0x21283a(0x16e)](_0x21283a(0x174)),
    mainMessage=document[_0x21283a(0x16e)]('main_message'),mainSend=document[_0x21283a(0x16e)]('main_send'),
    mainChat=document[_0x21283a(0x16e)]('main_chat'),user='',firebaseRef=firebase[_0x21283a(0x17f)]()
    [_0x21283a(0x15c)](_0x21283a(0x179));loginBtn[_0x21283a(0x16f)](_0x21283a(0x183),openMain),mainSend[_0x21283a(0x16f)]
    (_0x21283a(0x183),sendMessage),getChat(),mainName[_0x21283a(0x16f)](_0x21283a(0x183),function(){var _0x2452d4=_0x21283a;
        user='',formLogin[_0x2452d4(0x188)][_0x2452d4(0x166)]='flex',mainCon[_0x2452d4(0x188)]['display']='none';});
        function getChat(){var _0x32da57=_0x21283a;firebaseRef['once'](_0x32da57(0x16d),function(_0x5d83d6)
        {var _0x2a0fbe=_0x32da57;if(_0x5d83d6['exists']()){var _0x4c94c1='';_0x5d83d6[_0x2a0fbe(0x173)]
        (function(_0x39ad6f){var _0xe366f8=_0x2a0fbe;_0x4c94c1+=_0xe366f8(0x169),_0x4c94c1+=_0xe366f8(0x16c)+
            _0x39ad6f[_0xe366f8(0x17d)](_0xe366f8(0x17e))['val']()+_0xe366f8(0x184),_0x4c94c1+=_0xe366f8(0x165)+
            _0x39ad6f[_0xe366f8(0x17d)]('message')[_0xe366f8(0x172)]()+_0xe366f8(0x162),_0x4c94c1+=_0xe366f8(0x15d);})
            ,mainChat[_0x2a0fbe(0x186)]=_0x4c94c1;}else{var _0x4c94c1='';_0x4c94c1+=
            '<div\x20class=\x22main-chat-empty\x22>Type\x20Something\x20to\x20Start\x20Chatting</div>',
            mainChat['innerHTML']=_0x4c94c1;}})[_0x32da57(0x168)](function(){getChat();});}function handleValueChanges()
            {var _0x84d179=_0x21283a,_0x4f89a7=loginName[_0x84d179(0x16d)];_0x4f89a7!==''?loginBtn[_0x84d179(0x188)]
            [_0x84d179(0x187)]='#609B9E':loginBtn[_0x84d179(0x188)][_0x84d179(0x187)]=_0x84d179(0x161);}function openMain()
            {var _0x6902b4=_0x21283a;user=loginName['value'],formLogin[_0x6902b4(0x188)][_0x6902b4(0x166)]=_0x6902b4(0x15e)
            ,mainCon[_0x6902b4(0x188)][_0x6902b4(0x166)]=_0x6902b4(0x17c),mainName[_0x6902b4(0x186)]=user+_0x6902b4(0x171);}
            function sendMessage(){var _0x4b542a=_0x21283a,_0x3cc3cf=mainMessage[_0x4b542a(0x16d)];mainMessage[_0x4b542a(0x16d)]=''
            ,firebaseRef['once'](_0x4b542a(0x16d),function(_0xf52a54){var _0x5a17c2=_0x4b542a,_0x151330
                =parseInt(_0xf52a54[_0x5a17c2(0x160)]())+0x1;firebaseRef[_0x5a17c2(0x17d)](_0x151330)['set']
                ({'sender':user,'message':_0x3cc3cf,'index':_0x151330});});}