const colors = ['#904C4C', '#105425', '#23366D', '#5C1D69', '#693F1D'];
export const USERS_LIST = [{
    username: 'Alan',
    initials: 'AL',
    bgColor: '#904C4C'
},
{
    username: 'Bob',
    initials: 'BO',
    bgColor: '#904C4C'
},
{
    username: 'Carol',
    initials: 'CA',
    bgColor: '#23366D'
},
{
    username: 'Dean',
    initials: 'DE',
    bgColor: '#5C1D69'
},
{
    username: 'Elin',
    initials: 'EL',
    bgColor: '#693F1D'
}
]

function getRandomArbitrary(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
}

export function randomUser(): Record<string, string> {
    const randomIndex = getRandomArbitrary(0, USERS_LIST.length);
    const randomUser = USERS_LIST[randomIndex];
    console.log(randomUser);
    return randomUser;
}

function generateAvatarColor(): `#${string}` {
    const randomIndex = getRandomArbitrary(0, colors.length - 1);
    return colors[randomIndex] as `#${string}`;
}

export function generateDateTimestamp(): string {
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();
    return `${hours}:${minute}`;
}

// export function messageIntoHTML(text: string) {
//     let result = '';
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] === '@' || text[i] === '#') {
//             let mentionedPerson = ''
//             while (i < text.length && text[i] !== ' ') {
//                 mentionedPerson += text[i];
//                 i++;
//             }
//             result += `<span class='mentionedPerson'>${mentionedPerson}</span>`
//         }
//         else {
//             result += text[i];
//         }
//     }
//     console.log(`<pre>${result}</pre>`)
//     return `<pre class='pre-text'>${result}</pre>`
// }
export default generateAvatarColor