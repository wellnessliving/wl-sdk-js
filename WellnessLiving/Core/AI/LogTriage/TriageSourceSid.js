/**
 * Sources from which log triage findings can be collected.
 */
function Core_AI_LogTriage_TriageSourceSid()
{
  // Empty constructor.
}

/**
 * Erroneous asynchronous tasks stored by AsyncErrorSql.
 *
 * @type {number}
 */
Core_AI_LogTriage_TriageSourceSid.ASYNC_TASK = 5;

/**
 * Erroneous background tasks stored by CmsTaskQueueSql.
 *
 * @type {number}
 */
Core_AI_LogTriage_TriageSourceSid.BACKGROUND_TASK = 4;

/**
 * PHP error log represented by {@link Core_Log_CoreLog}.
 *
 * @type {number}
 */
Core_AI_LogTriage_TriageSourceSid.ERROR_LOG = 1;

/**
 * Slow-operation log represented by {@link Core_Log_CoreLog}.
 *
 * @type {number}
 */
Core_AI_LogTriage_TriageSourceSid.SLOW_LOG = 2;

/**
 * Aggregated usage statistics stored by WatchUsageStat.
 *
 * @type {number}
 */
Core_AI_LogTriage_TriageSourceSid.WATCH_USAGE_STAT = 3;
