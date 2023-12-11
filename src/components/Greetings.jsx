const Greetings = ({ lang, children }) => {
    let GreetingText = '';

    switch (lang) {
        case 'de':
            GreetingText = `Hallo ${children}`;
            break;
        case 'en':
            GreetingText = `Hello ${children}`;
            break;
        case 'es':
            GreetingText = `Hola ${children}`;
            break;
        case 'fr':
            GreetingText = `Bonjour ${children}`;
            break;
        default:
            GreetingText = `Hello ${children}`;
    }

    return (
        <div>
            <p>{GreetingText}</p>
        </div>
    );
};

export default Greetings;
