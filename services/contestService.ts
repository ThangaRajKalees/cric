
import { Contest, Match } from '../types';

/**
 * Simulates joining a contest.
 * In a real application, this would be a Firebase Callable Function.
 * It would perform server-side validation, check the user's balance,
 * create an entry document, and update the user's balance in a transaction.
 *
 * @param user - The authenticated user object.
 * @param match - The match object.
 * @param contest - The contest object to join.
 * @returns A promise that resolves with a success message or rejects with an error.
 */
export const joinContest = async (
  match: Match,
  contest: Contest
): Promise<{ success: boolean; message: string }> => {
  console.log(`Attempting to join contest "${contest.name}" for match "${match.teamA.name} vs ${match.teamB.name}"`);

  // TODO: Replace with Firebase Callable Function invocation
  // const joinContestCallable = httpsCallable(functions, 'joinContest');
  // try {
  //   const result = await joinContestCallable({ matchId: match.id, contestId: contest.id });
  //   return result.data as { success: boolean; message: string };
  // } catch (error) {
  //   console.error("Error joining contest:", error);
  //   return { success: false, message: 'An error occurred. Please try again.' };
  // }

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Placeholder logic
  if (contest.entryFee > 5000) { // Assume mock user has 5000 coins
      return { success: false, message: "Insufficient funds to join contest." };
  }
  
  return { success: true, message: `Successfully joined ${contest.name}!` };
};
