/**
 * Base class for log-triage problem searchers.
 */
function Core_AI_LogTriage_TriageProblemAbstract()
{
  // Empty constructor.
}

/**
 * Problem searcher for {@link \Core\Debug\DebugPhpLog} error-log records.
 *
 * @type {number}
 */
Core_AI_LogTriage_TriageProblemAbstract.LogErrorProblem = 2370;

/**
 * Problem searcher for {@link \Core\Debug\DebugSlowLog} slow-operation records.
 *
 * @type {number}
 */
Core_AI_LogTriage_TriageProblemAbstract.LogSlowProblem = 2371;

/**
 * Collects erroneous asynchronous tasks retained in the asynchronous error table.
 *
 * @type {number}
 */
Core_AI_LogTriage_TriageProblemAbstract.TaskAsyncProblem = 2359;

/**
 * Collects erroneous background tasks currently retained in the task queue.
 *
 * @type {number}
 */
Core_AI_LogTriage_TriageProblemAbstract.TaskBackgroundProblem = 2358;

/**
 * Collects the prioritized watch-usage summary used by log triage.
 *
 * The configuration intentionally follows the canonical watch-usage summary configuration.
 *
 * @type {number}
 */
Core_AI_LogTriage_TriageProblemAbstract.WatchUsageProblem = 2357;
