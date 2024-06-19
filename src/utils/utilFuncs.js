export const formatTopic = (topicSlug) => {
    const letters = topicSlug.split('');
    let formattedTopic = letters[0].toUpperCase();
    letters.shift();
    formattedTopic += letters.join('');
    return formattedTopic;
}