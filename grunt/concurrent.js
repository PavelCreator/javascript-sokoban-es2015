module.exports = {
    // Опции
    options: {
        limit: 3
    },
    // Задачи разработки
    devFirst: [
        'clean'
    ],
    devSecond: [
        'sass:dev',
        'concat:es5',
        'uglify:es5'
    ],
    // Производственные задачи
    prodFirst: [
        'clean'
    ],
    prodSecond: [
        'sass:prod',
        'concat:es5',
        'uglify:es5'
    ],
    // Задачи изображений
    imgFirst: [
        'imagemin'
    ]
};