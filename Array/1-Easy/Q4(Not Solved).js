/* ------------------------ Question-3-Array-Easy ------------------------

    There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as
    fast as possible. Teams compete in a round robin, where each team faces off against all other teams. Only two teams compete against each
    other at a time, and for each competition, one team is designated the home team, while the other team is the away team. In each competition
    there's always one winner and one loser; there are no ties. A team receives 3 points if it wins and 0 points if it loses. The winner of the
    tournament is the team that receives the most amount of points.
    Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition,
    write a function that returns the winner of the tournament. The input arrays are named competitions and results , respectively. The
    competitions array has elements in the form of [homeTeam, awayTeam] , where each team is a string of at most 30 characters
    representing the name of the team. The results array contains information about the winner of each corresponding competition in the
    competitions array. Specifically, results[i] denotes the winner of competitions[i] , where a 1 in the results array means
    that the home team in the corresponding competition won and a 0 means that the away team won.
    It's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once. It's also
    guaranteed that the tournament will always have at least two teams.


  ---- Sample input ----
  
    competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
    ]
    results = [0, 0, 1]
  
  ---- Sample output ----
  
    "Python"
    // C# beats HTML, Python Beats C#, and Python Beats HTML.
    // HTML - 0 points
    // C# - 3 points
    // Python - 6 points


*/
/* ------------------------ Hints ------------------------

  -- Hint 1 
  Don't overcomplicate this problem. How would you solve it by hand? Consider
  that approach, and try to translate it into code.

  -- Hint 2 

  Use a hash table to store the total points collected by each team, with the
  team names as keys in the hash table. Once you know how many points each team
  has, how can you determine which one is the winner?

  -- Hint 3 

  Loop through all of the competitions, and update the hash table at every
  iteration. For each competition, consider the name of the winning team; if the
  name already exists in the hash table, update that entry by adding 3 points to
  it. If the team name doesn't exist in the hash table, add a new entry in the
  hash table with the key as the team name and the value as 3 (since the team
  won its first competition). While looping through all of the competitions,
  keep track of the team with the highest score, and at the end of the
  algorithm, return the team with the highest score.


// OPTIMIZE 
O(n) time | O(k) space - where n is the number of competitions and k is the number of teams

/* ------------------------ Solutions ------------------------*/

//  ---- First solution ---- :
function tournamentWinner(competitions, results) {
  // Write your code here.
  return '';
}

// algo solostion
// Copyright © 2022 AlgoExpert LLC. All rights reserved.
const HOME_TEAM_WON = 1;
// O(n) time | O(k) space - where n is the number
// of competitions and k is the number of teams
function tournamentWinner(competitions, results) {
  let currentBestTeam = '';
  const scores = { [currentBestTeam]: 0 };
  for (let idx = 0; idx < competitions.length; idx++) {
    const result = results[idx];
    const [homeTeam, awayTeam] = competitions[idx];
    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
    updateScores(winningTeam, 3, scores);
    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
}
function updateScores(team, points, scores) {
  if (!(team in scores)) scores[team] = 0;
  scores[team] += points;
}
// Do not edit the line below.
