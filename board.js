// Board screen: score at the top, then a 6x5 grid of categories and point values
let boardPage = (categories, score) => {
    return `
    <div id="score">Score: ${score}</div>
    <table>
        <!-- header row: one category name per column -->
        <tr>
            ${categories.map(cat => `<th>${cat.name}</th>`).join("")}
        </tr>

        <!-- one row per point value (100-500) -->
        ${[0, 1, 2, 3, 4].map(rowIndex => `
            <tr>
                ${categories.map((cat, catIndex) => `
                    <td class="quest-btn" data-cat="${catIndex}" data-row="${rowIndex}">
                        ${cat.questions[rowIndex].used ? "" : cat.questions[rowIndex].value}
                    </td>
                `).join("")}
            </tr>
        `).join("")}
    </table>
    `;
};
