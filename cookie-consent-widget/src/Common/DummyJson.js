const widgetProperties = {
    cookieNotifyData: {
        headingData: {
            text: "This site uses cookies",
            textColor: "#808080"
        },
        contentData: {
            text: `We use cookies to improve your experience, to remember log-in details, provide secure login, collect, to optimize site functionality and deliver content tailored to your interests.`,
            textColor: "#808080"
        },
        acceptButtonData: {
            text: "Accept",
            textColor: "white",
            backgroundColor: "#212529"
        },
        settingsLink: {
            text: "Settings",
            textColor: "white",
            backgroundColor: "#006496"
        },
        backgroundColor: "#fff",
        borderColor: "#e8e2e2"
    },
    cookieSettingsData: {
        headingData: {
            text: "Your Privacy",
            textColor: "black"
        },
        contentData: {
            text: `We use cookies to improve your experience, to remember log-in details, provide secure login, collect, to optimize site functionality and deliver content tailored to your interests.`,
            textColor: "grey"
        },
        acceptButtonData: {
            text: "Accept All",
            textColor: "white",
            backgroundColor: "#006496"
        },
        accordionData: {
            headerColor: "black",
            contentColor: "black",
            toggleSelectedColor: "#2196F3",
            toggleDefaultColor: "#ccc",
            backgroundColor: "white",
            borderColor: "black",
            accordionList: [
                {
                    text: "Strictly Necessary Cookies",
                    hasToggle: false,
                    content: `These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.\r\n\r\nYou can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.`
                }, {
                    text: "Performance Cookies",
                    hasToggle: true,
                    content: `These cookies allow us to count visits and traffic sources, so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.\r\n\r\nAll information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.`,
                    selected: true
                }, {
                    text: "Functional Cookies",
                    hasToggle: true,
                    content: `These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.\r\n\r\nIf you do not allow these cookies then some or all of these services may not function properly.`,
                    selected: false
                }, {
                    text: "Targetting Cookies",
                    hasToggle: true,
                    content: `These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.\r\n\r\nThey do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.`,
                    selected: false
                }
            ]
        },
        saveButtonData: {
            text: "Save My Preferences",
            textColor: "#000",
            backgroundColor: "#fff",
            borderColor: "#000"
        },
        backgroundColor: "#fff",
        borderColor: "#e8e2e2"
    },
    position: "right",
    alwaysShowPopupOnLoad: false
};

export default {
    widgetProps : widgetProperties
};