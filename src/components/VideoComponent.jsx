import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ZegoSuperBoardManager } from "zego-superboard-web";

const VideoComponent = () => {

     const {roomID} = useParams();
     console.log(roomID);
     const containerRef = React.useRef(null);

     useEffect(() => {
          let myMeeting = async (element) => {
               if(!roomID || !containerRef.current) return;
               // generate Kit Token
               const appID = 1579136884;
               const serverSecret = "d7f1e663530959c756a2ed7aec0137b3";
               const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  "Anonymous");
     
          
               // Create instance object from Kit Token.
               const zp = ZegoUIKitPrebuilt.create(kitToken);
               // start the call
               zp.addPlugins({ZegoSuperBoardManager});
               zp.joinRoom({
                    container: element,
                         sharedLinks: [
                              {
                                   name: 'Personal link',
                                   url:
                                   window.location.protocol + '//' + 
                                   window.location.host + window.location.pathname +
                                   '?roomID=' +
                                   roomID,
                              },
                         ],
                         scenario: {
                              mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
                         },
                         onUserAvatarSetter:(userList) => {
                              userList.forEach(user => {
                                  user.setUserAvatar("https://img.freepik.com/free-psd/single-dark-red-maple-leaf-isolated-transparent-background-showcasing-autumnal-colors-intricate-leaf-details-perfect-design-elements-seasonal-decorations_632498-31926.jpg?t=st=1737815482~exp=1737819082~hmac=70f41e8692f4f3c1144ff60f6876ce2e0677dda9f75a7b3e3e4b16efa7e6314f&w=740")
                              })
                          }, 
               });
        
          };     
          myMeeting();

          return () => {
               if(containerRef.current) {
                    containerRef.current.innerHTML = '';
               }
          }
     }, [roomID]);

     return (
     <div
          className="myCallContainer"
          ref={containerRef}
          style={{ width: '100vw', height: '100vh' }}
     ></div>
     );
}

export default VideoComponent
