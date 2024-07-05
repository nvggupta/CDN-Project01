const Heading = React.createElement(
    
    'h1',
    { className: 'heading' },
    null,
    'Learn web development'
);

const Paragraph = React.createElement(
    
    'p',
    { className: 'para' },
    null,
    'Welcome to the MDN learning area. This set of articles aims to provide complete beginners to web development with fundamental skills for coding websites. The aim is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from the ',React.createElement(
        'a',
        { href: 'https://developer.mozilla.org/en-US/', target: '_blank', rel: 'noopener noreferrer' },
        'the rest of MDN,'
    ) ,'and other intermediate to advanced resources that assume a lot of previous knowledge.'
);

const App = React.createElement(
    'div',
    null,
    Heading,
    Paragraph
);

// Render the App component into the DOM
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(App);