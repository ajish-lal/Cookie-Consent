import Font from "../Common/Font";

export const CookieWidgetStyles = `
.FontStyle {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.PopupContainer {
    position: fixed;
    width: 36%;
    bottom: 10px;
    right: 10px;
}
.NotifyPopupContainer {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    background: #fff;
    border: 1px solid #e8e2e2;
    animation: showPopup 0.6s;
}
.SettingPopupContainer {
    flex-direction: column;
}
.SettingPopupAnimation {
    animation: hidePopup 0.8s;
}
.CookieTextContainer {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.SettingsCookieTextContainer{
    width: 100%;
    padding-bottom: 12px;
}
.SettingsLinkContainer {
    width: 100%;
    text-align: center;
}
.ButtonContainer {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.AccordionContainer {
    padding: 17px 0 5px 0;
    max-height: 50vh;
    overflow-y: auto;
}
.ccwButtonSpace{
    justify-content: space-around;
}
.SettingsSaveButtonContainer {
    width: 50%;
}
.LabelContainer {
    width: 100%;
    display: flex;
    color: gray
}
.HeaderLabel {
    font-size: ${Font['font-size-l']};
    font-weight: bold;
    display: flex;
    justify-content: space-between;
}
.SettingsCloseBtn{
    cursor: pointer;
}
.SettingsCloseBtn:before{
    content: '\u00d7';
}
.CookieInfoLabel {
    font-size: ${Font['font-size-m']};
}
@media all and (min-width: 768px) and (max-width: 1024px) {
    .PopupContainer {
      width: 60% !important;
   }
}
@media all and (min-width: 320px) and (max-width: 767px) {
    .PopupContainer {
      width: 95% !important;
   }
}
@keyframes showPopup {
    0%   {transform: translateY(110%);}
    100% {transform: translateY(0)}
}
.AccordionContainer {
    padding: 17px 0 5px 0;
}
:lang(ar) {
    direction: rtl;
}

`;