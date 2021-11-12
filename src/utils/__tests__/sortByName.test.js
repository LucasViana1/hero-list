import sortByName from '../sortByName';

describe('Get alphabetical ordering of character list', () => {
  const asc = 'asc';
  const desc = 'desc';
  const listInput = [
    { name: 'Spider Man' },
    { name: 'Wasp' },
    { name: 'Hulk' },
    { name: 'Captain America' },
    { name: 'iRoN mAn' },
    { name: 'Black Panther' },
    { name: 'IRON MAN' },
    { name: 'Wasp' },
    { name: 'Black Widow' },
    { name: 'black widow' },
  ];

  describe('Dealing with inconsistencies with incorrect parameters', () => {
    it('Should be list must be returned without modification if the classification term is incorrect', () => {
      expect(sortByName(listInput, '')).toEqual(listInput);
      expect(sortByName(listInput, undefined)).toEqual(listInput);
      expect(sortByName(listInput, null)).toEqual(listInput);
      expect(sortByName(listInput, 'ascendente')).toEqual(listInput);
      expect(sortByName(listInput, 'descendente')).toEqual(listInput);
      expect(sortByName(listInput, 1)).toEqual(listInput);
      expect(sortByName(listInput, 0)).toEqual(listInput);
    });

    it('Should be returned an empty list if the list param ​​are incorrect', () => {
      expect(sortByName([], asc)).toEqual([]);
      expect(sortByName(undefined, asc)).toEqual([]);
      expect(sortByName(null, asc)).toEqual([]);
      expect(sortByName('', asc)).toEqual([]);
      expect(sortByName(1, asc)).toEqual([]);
      expect(sortByName(0, asc)).toEqual([]);

      expect(sortByName([], desc)).toEqual([]);
      expect(sortByName(undefined, desc)).toEqual([]);
      expect(sortByName(null, desc)).toEqual([]);
      expect(sortByName('', desc)).toEqual([]);
      expect(sortByName(1, desc)).toEqual([]);
      expect(sortByName(0, desc)).toEqual([]);
    });

    it('Should be the list  returned unmodified if the list properties are incorrect', () => {
      const incorrectList = [{ title: 'Wasp' }, { Name: 'Hulk' }, 'Spider Man', { 0: 'black widow' }, 2];

      expect(sortByName(incorrectList, asc)).toEqual(incorrectList);
      expect(sortByName(incorrectList, desc)).toEqual(incorrectList);
    });
  });

  describe('Return sorting correctly', () => {
    it('Should be sorted asc', () => {
      const listOutput = [
        { name: 'Black Panther' },
        { name: 'Black Widow' },
        { name: 'black widow' },
        { name: 'Captain America' },
        { name: 'Hulk' },
        { name: 'iRoN mAn' },
        { name: 'IRON MAN' },
        { name: 'Spider Man' },
        { name: 'Wasp' },
        { name: 'Wasp' },
      ];

      const results = sortByName(listInput, asc);

      expect(results).toEqual(listOutput);
    });

    it('Should be sorted desc', () => {
      const listOutput = [
        { name: 'Wasp' },
        { name: 'Wasp' },
        { name: 'Spider Man' },
        { name: 'iRoN mAn' },
        { name: 'IRON MAN' },
        { name: 'Hulk' },
        { name: 'Captain America' },
        { name: 'Black Widow' },
        { name: 'black widow' },
        { name: 'Black Panther' },
      ];

      const results = sortByName(listInput, desc);

      expect(results).toEqual(listOutput);
    });
  });
});
