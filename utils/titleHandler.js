module.exports = {
    ConvertTitleToSlug: function (title) {
        let result = title.toLowerCase();
        result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        // replace Vietnamese 'đ' which is not decomposed by NFD
        result = result.replace(/đ/g, 'd');
        result = result.replace(/[^a-z0-9]+/g, '-');
        result = result.replace(/^-+|-+$/g, '');
        return result;
    }
}
