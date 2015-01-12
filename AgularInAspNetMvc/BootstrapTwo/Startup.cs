using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BootstrapTwo.Startup))]
namespace BootstrapTwo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
