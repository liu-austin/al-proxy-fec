const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'catpictures.com',
    'myfavoritecats.com',

];

const googleSearch = (searchInput) => {
    const matches = googleDatabase.filter(website => website.includes(searchInput));
    return matches.length > 3 ? matches.slice(0,3) : matches;
};

it('this tests jests', () => {
    expect('hello').toBe('hello');
});

it('it is testing google', () => {
    expect(googleSearch('testtest')).toEqual([]);
});

it('it should work with null and undefined input', () => {
    expect(googleSearch()).toEqual([]);
})