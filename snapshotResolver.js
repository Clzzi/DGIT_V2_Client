module.exports = {
  testPathForConsistencyCheck: '.',

  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath.replace(/\.test\.([t]sx?)/, `${snapshotExtension}.$1`),

  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath.replace(snapshotExtension, '.test'),
};
