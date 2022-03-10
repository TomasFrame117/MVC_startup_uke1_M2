/*
For hver side:
- Hvilke data må vi ha i modellen for å kunne tegne opp dette skjermbildet? Query

- Hva kan man gjøre i dette skjermbildet? Hvordan skal det vises i modellen? Command

- Alle input felter på siden trenger et eget felt i modellen.
*/
const model = {
    //app
    app: {
        currentPage: '',
        currentUser: null,
    },

    //input
    input: {
        userInlog: '',
        userPassword: '',
        adminInlog: '',
        adminPassword: '',
    },

    questions: {
        tittel: "",
        spørsmål: [],
        other: [],
        startTime: "",
        endTime: "",
        startDate: "",
        endDate: "",
    },

    //data
    user: [{
        id: 1,
        name: 'Anonym1',
        pass: '1234',
        admin: false,
    },

    {
        id: 2,
        name: 'Anonym2',
        pass: '4321',
        admin: false,
    },

    {
        id: 3,
        name: 'Jøran',
        pass: 'ABCD',
        admin: true,
    },

    ],


    surveyAnswers: [
        {
            id: 1,
            partInNo: '',
            partInPerc: '',
            //adminAnswers: '',
            startDate: '',
            endDate: '',
            startTime: '',
            endTime: '',
            disclaimer: 'Du Svarer Anonymt',
            
        },
    ],

    surveyData: [
        {
            results: [
                { totalAnswers: '' },
                { resultsInPerc: '' },
                { resultOther: [] },
               
            ],
        }


    ],
}
