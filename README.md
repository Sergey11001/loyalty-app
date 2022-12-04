# Components:
## 1.Achievement:
### Блок достижений в профиле
<img src="./src/assets/scrinshots/img.png">

## 2.AdminProfile:
### Большая фотка профиля на странице админа

## 3.Footer:
### Просто футер. Может принамать параметр menuDropDown. Параметр нужен для использование футера в выпадающем меню (burger menu)

## 4.Header
### Просто верхушка страницы

## 6.NftItem
### Элемент списка нфтишек. Должны передать в него обЪект с парамертами urlImg, price, title, id?
<img src="./src/assets/scrinshots/img_1.png">

## 5.NftList
### Список нфтишек, которые можно купить
<img src="./src/assets/scrinshots/img_2.png">

## 7.ProfileBlock
### Общий блок профиля. Содержит в себе Меню и то, что показывается при выборе пункта меню (Ачивки, коллецию nft и тд)
<img src="./src/assets/scrinshots/img_3.png">


## 8.ProfileMenu
### Меню профиля
<img src="./src/assets/scrinshots/img_4.png">


## 9.ScrollingListNft
### Скроллинг элементов в блоках, которые находятся в основном блоке профиля. Может принимать два необязательных параметра twoRows и delisting. Если передается twoRows, то список получается ограничение по строкам - 2. Когда передается delisting, появляется кнопка Delisting у элементов
<img src="./src/assets/scrinshots/img_5.png">


## 10.Search 
### Отслеживает то, что ввел пользователь в input и с задержкой 300мс введенный запрос в компонент NftList
<img src="./src/assets/scrinshots/img_6.png">


## 11.Sort
### Пока ничего не делает, только переключет активное выбранную сортировку
<img src="./src/assets/scrinshots/img_7.png">


## 12.TopPanel
### Верхняя панель под header. Принимает один необязательный параметр admin. Если передать, то просто меняются украшения вокруг. Изначально содержит кнопку connect wallet. После подключения клошелька меняет ее на его номер. Блок с номером кошелька, который должен заменить кнопку закоменчен в компоненте
<img src="./src/assets/scrinshots/img_8.png">


## 13.WhiteListForm
### Форма на странице админа
<img src="./src/assets/scrinshots/img_9.png">


## 14.Admin
### Страница админа

## 15.Loyalty
### Основная страница

## 16.Input
### UI компонент ввода. label=placeholder, type=тип вводимых значений

## 17.ProfileNotMenuChosen
### Блок в основном блоке профиля. Может выводить компоненту  ProfileConnected, если кошелек подключен, но пункт меню не выбран. Может выводить ProfileUnconnected, если кошелек не подключен

## 18.ProfileUnconnected
### Блок выводится, когда кошелек не подключен
<img src="./src/assets/scrinshots/img_11.png">



## 19.ProfileConnected
### Блок выводится, когда кошелек подключен, но не выбран ни один пункт меню
<img src="./src/assets/scrinshots/img_10.png">


## 20.ProfileListing
### Блок профиля. Выводится когда выбран пункт меню Listing NFT
<img src="./src/assets/scrinshots/img_13.png">


## 21.ProfilePass
### Блок профиля. Выводится когда выбран пункт меню My Pass Id
<img src="./src/assets/scrinshots/img_12.png">


## 22.ProfileNftCollection
### Блок профиля. Выводится когда выбран пункт меню My NFT
<img src="./src/assets/scrinshots/img_14.png">
