export default {
    locale: 'Українська',
    app: {
        title: 'Ban-DERA',
        subtitle: '<strong>BAN</strong> <strong>D</strong>igital <strong>E</strong>nvironment for <strong>R</strong>ussian <strong>A</strong>ssets',
        version: {
            code: '2.0',
            title: 'Чорнобаївка'
        }
    },
    statusPanel: {
        title: 'Панель стану',
        data: {
            ip: 'IP-адреса',
            country: 'Країна',
            totalTargets: 'Всього цілей',
            activeTargets: 'Доступних',
            maxTargets: 'Одночасні цілі',
            attackSpeed: 'Швидкість атаки'
        }
    },
    donation: {
        army: {
            button: 'Допомога для ЗСУ',
            title: 'Допомога воїнам України'
        },
        support: {
            button: 'Підтримати цей сайт',
            title: 'Підтримати розробника',
            content: '<p>Ми працюємо на волонтерських засадах. Якщо у Вас виникло бажання допомогти цьому проєкту, Ви можете зробити це також. Дякую.</p>'
        }
    },
    info: {
        title: 'Інформація',
        content: '<p>DoS-атака (Denial-of-service) - одним із найпоширеніших методів нападу, насичення атакованого сервера великою кількістю зовнішніх запитів.</p>' +
            '<p>З Вашого комп\'ютера буде надсилатись нескінченна кількість запитів на російські сайти, що може відправити їх в слід за рускім воєнним кораблем. Тобто, НАХУЙ. Просто залишіть скрипт працюючим. Якщо якийсь сайт буде визначено як "відвалений" - його буде замінено на інший, тобто Ваша атака буде постійною.</p>' +
            '<p><strong>УВАГА!</strong> Так як цей скрипт ініціює велику кількість запитів за короткий проміжок часу, його запуск може уповільнити роботу Вашого комп\'ютера та використати велику кількість трафіку. Не рекомендується використовувати його з мобільних мереж, де, зазвичай, трафік обмежений.</p>'
    },
    statusInfo: {
        title: 'Про ефективність атаки',
        content: '<p>Доступність сайту - це його можливість відповідати на запити. Для забезпечення швидкої роботи з веб-сторінками часто один і той же сайт знаходиться на багатьох серверах у різних точках світу. Інколи сайт припиняє свою роботу в певній країні, проте повністю функціонує в інших.</p>' +
            '<p>Ban-DERA зібрав одну із найбільших баз сайтів-цілей серед аналогічних сервісів. Але ми пішли далі і додали можливість перевіряти доступність кожної цілі з 21 датацентру у 18 країнах.</p>' +
            '<p><strong>Наприклад:</strong> Якщо ви використовуєте VPN із сервером у Німеччині, вам буде запропоновано тільки ті цілі, які досі залишаються доступними із Німеччини.</p>'
    },
    vpnServices: {
        title: 'VPN-сервіси',
        table: {
            title: 'VPN сервіс',
            hasRussiaServers: 'Сервери у рашці',
            isFree: 'Є безкоштовно',
            demo: 'Є демо/тестовий період',
            description: 'Додатково'
        },
        services: [
            ['Hotspot Shield', 'https://www.hotspotshield.com/', true, true, true, ''],
            ['ClearVPN', 'https://clearvpn.com/', true, true, true, 'Безкоштовно з України'],
            ['UrbanVPN', 'https://www.urban-vpn.com/', true, true, true, ''],
            ['Freedome Secure', 'https://onlineshop.f-secure.com/789/purl-free-freedome-for-ukraine', false, false, true, 'Безкоштовно 6 місяців для України'],
            ['VPN Unlimited', 'https://www.vpnunlimited.com/stop-russian-aggression', false, false, false, 'Річна підписка для України'],
            ['ProtonVPN', 'https://protonvpn.com/ua/', true, true, true, ''],
        ]
    },
    share: {
        timer: 'На Землі путін прожив вже {darknessPeriod} днів.',
        stop: 'Зупинити таймер',
        title: 'Поділися посиланням'
    },
    table: {
        url: 'URL',
        requests: 'Запити',
        actions: 'Дії'
    },
    start: 'Старт',
    stop: 'Стоп',
    copy: 'Копіювати',
    replace: 'Замінити',
    open: 'Відкрити',
    blackList: 'Виключити',
    night: 'Нічний режим',
    loading: 'Завантаження',
    search: 'Пошук...',
    filter: 'Всього відфільтровано',
    settings: 'Налаштування',
    units: {
        target: '{n} сайт | {n} сайтів',
        request: '{n} запит/с | {n} запитів/с'
    },
    notification: {
        title: {
            success: 'Успішно',
            warning: 'Увага',
            error: 'Помилка'
        },
        text: {
            error: {
                'unknown': 'Поняття не маю що сталось. Спробуйте перезавантажити сторінку.',
                '429': 'Надто багато запитів! Охолоньте, і спробуйте через хвилину.',
                '500': 'Внутрішня помилка севрера.'
            }
        }
    }
}
