export class WidgetDataModel {
    constructor(data) {
        this.cookieNotifyData = new CookieNotifyData(data.cookieNotifyData);
        this.cookieSettingsData = new CookieSettingsData(data.cookieSettingsData);
        this.position = data.position;
        this.alwaysShowPopupOnLoad = data.alwaysShowPopupOnLoad;
    }
}

class CookieNotifyData {
    constructor(data) {
        this.headingData = new DataObject(data.headingData);
        this.contentData = new DataObject(data.contentData);
        this.acceptButtonData = new DataObject(data.acceptButtonData);
        this.settingsLink = new DataObject(data.settingsLink);
        this.backgroundColor = data.backgroundColor;
        this.borderColor = data.backgroundColor;
    }
}

class CookieSettingsData {
    constructor(data) {
        this.headingData = new DataObject(data.headingData);
        this.contentData = new DataObject(data.contentData);
        this.acceptButtonData = new DataObject(data.acceptButtonData);
        this.accordionData = new AccordionData(data.accordionData);
        this.saveButtonData = new DataObject(data.saveButtonData);
        this.backgroundColor = data.backgroundColor;
        this.borderColor = data.backgroundColor;
    }
}

class AccordionData {
    constructor(data) {
        this.headerColor = data.headerColor;
        this.contentColor = data.contentColor;
        this.toggleSelectedColor = data.toggleSelectedColor;
        this.toggleDefaultColor = data.toggleDefaultColor;
        this.backgroundColor = data.backgroundColor;
        this.borderColor = data.borderColor;
        this.accordionList = [];
        data.accordionList.forEach(element => {
            this.accordionList.push(new DataObject(element)) 
        });
    }
}

class DataObject {
    constructor(data) {
        this.text = data.text;
        this.textColor = data.textColor;
        this.backgroundColor = data.backgroundColor;
        this.borderColor = data.borderColor;
        this.content = data.content;
        this.hasToggle = data.hasToggle;
        this.selected = data.selected;
    }
}

export default WidgetDataModel
