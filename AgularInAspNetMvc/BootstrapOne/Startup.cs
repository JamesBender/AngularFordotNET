using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BootstrapOne.Startup))]
namespace BootstrapOne
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
