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
        'uglify'
    ],
    // Производственные задачи
    prodFirst: [
        'clean'
    ],
    prodSecond: [
        'sass:prod',
        'concat',
        'uglify'
    ],
    // Задачи изображений
    imgFirst: [
        'imagemin'
    ]
};