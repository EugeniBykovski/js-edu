/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */

module.exports = function getTimeForEducation(
    focus = 'family',
    knowsProgramming = true,
    config = { family: 4 }
) {
    var week;
    if (knowsProgramming == true) {
        week = 800;
    } else {
        week = 1300;
    }

    if (focus == 'family') {
        return week / config.family;
    } else if (focus == 'friends') {
        return week / config.friends;
    } else if (focus == 'normal_life') {
        return Math.ceil(week / config.normal_life);
    } else if (focus == 'profession') {
        return Math.ceil(week / config.profession);
    } else if (focus == 'carrier') {
        return Math.ceil(week / config.carrier);
    } else if (focus == 'top_peformance') {
        return Math.ceil(week / config.top_peformance);
    }
};