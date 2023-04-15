module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.SUBGRAPH_RELEASE_TAG': JSON.stringify(process.env.SUBGRAPH_RELEASE_TAG),
    }),
  ],
};
